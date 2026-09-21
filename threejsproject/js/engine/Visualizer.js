import * as THREE from 'three';

export class Visualizer {
    constructor(modelLoader) {
        this.modelLoader = modelLoader;
        
        // Setup heatmap colors (Blue -> Cyan -> Green -> Yellow -> Red)
        this.colorScale = [
            { value: 0, color: new THREE.Color(0x0000ff) }, // Cold (Blue)
            { value: 0.25, color: new THREE.Color(0x00ffff) }, // Cyan
            { value: 0.5, color: new THREE.Color(0x00ff00) }, // Green
            { value: 0.75, color: new THREE.Color(0xffff00) }, // Yellow
            { value: 1.0, color: new THREE.Color(0xff0000) }  // Hot (Red)
        ];
    }

    // Helper to get color from heatmap
    getHeatmapColor(normalizedValue) {
        const val = Math.max(0, Math.min(1, normalizedValue));
        
        for (let i = 0; i < this.colorScale.length - 1; i++) {
            const current = this.colorScale[i];
            const next = this.colorScale[i + 1];
            
            if (val >= current.value && val <= next.value) {
                const t = (val - current.value) / (next.value - current.value);
                return current.color.clone().lerp(next.color, t);
            }
        }
        return this.colorScale[this.colorScale.length - 1].color;
    }

    applyState(state) {
        if (!state || !this.modelLoader.modelGroup) return;

        const group = this.modelLoader.modelGroup;

        // Apply Scale
        if (state.scale !== undefined) {
            group.scale.setScalar(state.scale);
        }

        // Apply Rotation (assuming state.rotation is in degrees for Y axis)
        if (state.rotation !== undefined) {
            group.rotation.y = THREE.MathUtils.degToRad(state.rotation);
        }

        // Apply Heatmap based on 'value' (assuming value is between 0 and 100)
        if (state.value !== undefined) {
            const normalizedValue = state.value / 100.0;
            const heatColor = this.getHeatmapColor(normalizedValue);

            // Traverse model and apply color to materials
            this.modelLoader.currentModel.traverse((child) => {
                if (child.isMesh) {
                    if (!child.userData.originalMaterial) {
                        child.userData.originalMaterial = child.material;
                        // Create a cloned material so we don't affect other models
                        child.material = child.material.clone(); 
                    }
                    
                    // Simple color tinting for heatmap effect
                    // If it has a map, we multiply color. If not, we set it.
                    child.material.color.copy(heatColor);
                    
                    // Ensure material updates
                    child.material.needsUpdate = true;
                }
            });
        }
    }
}
