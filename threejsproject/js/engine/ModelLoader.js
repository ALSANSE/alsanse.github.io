import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export class ModelLoader {
    constructor(scene) {
        this.scene = scene;
        this.loader = new GLTFLoader();
        this.currentModel = null;
        this.mixer = null;
        this.animations = [];
    }

    async loadFromUrl(url) {
        return new Promise((resolve, reject) => {
            this.loader.load(
                url,
                (gltf) => {
                    this.setupModel(gltf);
                    resolve(gltf);
                },
                (xhr) => {
                    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
                },
                (error) => {
                    console.error('An error happened while loading GLTF', error);
                    reject(error);
                }
            );
        });
    }

    async loadFromFile(file) {
        return new Promise((resolve, reject) => {
            const url = URL.createObjectURL(file);
            this.loader.load(
                url,
                (gltf) => {
                    this.setupModel(gltf);
                    URL.revokeObjectURL(url);
                    resolve(gltf);
                },
                undefined,
                (error) => {
                    URL.revokeObjectURL(url);
                    reject(error);
                }
            );
        });
    }

    setupModel(gltf) {
        if (this.currentModel) {
            this.scene.remove(this.currentModel);
        }

        this.currentModel = gltf.scene;
        this.animations = gltf.animations;
        
        // Normalize model size and center it
        const box = new THREE.Box3().setFromObject(this.currentModel);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 5 / maxDim; // Normalize to size 5

        this.currentModel.scale.setScalar(scale);
        this.currentModel.position.sub(center.multiplyScalar(scale));
        
        // Base group to apply our transformations easily
        this.modelGroup = new THREE.Group();
        this.modelGroup.add(this.currentModel);
        this.scene.add(this.modelGroup);

        // Setup animation mixer if animations exist
        if (this.animations && this.animations.length > 0) {
            this.mixer = new THREE.AnimationMixer(this.currentModel);
            this.action = this.mixer.clipAction(this.animations[0]);
            this.action.play();
        } else {
            this.mixer = null;
        }
    }

    updateAnimation(deltaTime) {
        if (this.mixer) {
            this.mixer.update(deltaTime);
        }
    }

    setAnimationTime(time) {
        if (this.mixer && this.action) {
            // Map timeline time to animation duration
            const duration = this.action.getClip().duration;
            // Assuming time is in seconds, loop if longer
            this.action.time = time % duration; 
            this.mixer.update(0); // force update to specific time
        }
    }
    
    toggleVisibility() {
        if (this.modelGroup) {
            this.modelGroup.visible = !this.modelGroup.visible;
        }
    }
}
