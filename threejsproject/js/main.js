import { ThreeEngine } from './engine/ThreeEngine.js';
import { ModelLoader } from './engine/ModelLoader.js';
import { Visualizer } from './engine/Visualizer.js';
import { TimelineManager } from './core/TimelineManager.js';
import { DataManager } from './core/DataManager.js';

class App {
    constructor() {
        this.engine = new ThreeEngine('canvas-container');
        this.modelLoader = new ModelLoader(this.engine.scene);
        this.visualizer = new Visualizer(this.modelLoader);
        this.timeline = new TimelineManager();
        this.dataManager = new DataManager();

        this.initUI();
        this.setupTimelineListeners();
        
        // Start render loop
        this.animate();

        // Load default assets (optional, can just show empty scene until files loaded)
        this.loadDefaultAssets();
    }

    async loadDefaultAssets() {
        try {
            // Provide a simple default cube if no model loaded yet just to show something
            // Wait, we will try to load data first
            await this.dataManager.loadDataFromUrl('assets/data/sample.json');
            this.timeline.setDuration(this.dataManager.getDuration());
            
            // Generate a simple box mesh to act as placeholder until a real GLB is loaded
            const geometry = new THREE.BoxGeometry(2, 2, 2);
            const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
            const box = new THREE.Mesh(geometry, material);
            
            // Dummy GLTF structure
            this.modelLoader.setupModel({ scene: box, animations: [] });
            console.log("기본 데이터 및 플레이스홀더 모델이 로드되었습니다.");
        } catch (e) {
            console.warn("기본 에셋을 로드할 수 없습니다. 파일을 직접 업로드해주세요.", e);
        }
    }

    initUI() {
        // Timeline controls
        document.getElementById('btn-play').addEventListener('click', () => this.timeline.play());
        document.getElementById('btn-pause').addEventListener('click', () => this.timeline.pause());
        
        document.getElementById('select-speed').addEventListener('change', (e) => {
            this.timeline.setSpeed(parseFloat(e.target.value));
        });

        const slider = document.getElementById('timeline-slider');
        slider.addEventListener('input', (e) => {
            // Pause while dragging slider for better UX
            this.timeline.pause();
            this.timeline.seek(parseFloat(e.target.value));
        });

        // Visibility Toggle
        document.getElementById('btn-toggle-visibility').addEventListener('click', () => {
            this.modelLoader.toggleVisibility();
        });

        // File Inputs
        document.getElementById('file-model').addEventListener('change', async (e) => {
            const file = e.target.files[0];
            if (file) {
                await this.modelLoader.loadFromFile(file);
                // Reset state to current time
                const state = this.dataManager.getStateAtTime(this.timeline.time);
                this.visualizer.applyState(state);
            }
        });

        document.getElementById('file-data').addEventListener('change', async (e) => {
            const file = e.target.files[0];
            if (file) {
                await this.dataManager.loadDataFromFile(file);
                this.timeline.setDuration(this.dataManager.getDuration());
                slider.max = this.dataManager.getDuration();
            }
        });
    }

    setupTimelineListeners() {
        const slider = document.getElementById('timeline-slider');
        const timeDisplay = document.getElementById('time-display');

        this.timeline.onUpdate((state) => {
            // Update UI
            slider.max = state.duration;
            slider.value = state.time;
            timeDisplay.innerText = `Time: ${state.time.toFixed(2)}`;

            // Update Engine/Visuals
            const dataState = this.dataManager.getStateAtTime(state.time);
            if (dataState) {
                this.visualizer.applyState(dataState);
            }
            
            // Update GLTF Animations
            this.modelLoader.setAnimationTime(state.time);
        });
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this));
        
        this.timeline.update();
        // If there's an animation mixer, it's updated via timeline listener or directly here
        // We use setAnimationTime in the timeline update for absolute time control
        
        this.engine.render();
    }
}

// Ensure THREE is globally available for loaders (sometimes needed depending on module setup)
import * as THREE from 'three';
window.THREE = THREE;

// Start app
window.onload = () => {
    new App();
};
