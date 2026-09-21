export class TimelineManager {
    constructor() {
        this.time = 0;
        this.duration = 100; // Will be set based on data
        this.isPlaying = false;
        this.speed = 1.0;
        this.lastUpdateTime = performance.now();
        
        this.listeners = [];
    }

    setDuration(duration) {
        this.duration = duration;
        this.notify();
    }

    play() {
        if (!this.isPlaying) {
            this.isPlaying = true;
            this.lastUpdateTime = performance.now();
            this.notify();
        }
    }

    pause() {
        this.isPlaying = false;
        this.notify();
    }

    setSpeed(speed) {
        this.speed = speed;
    }

    seek(time) {
        this.time = Math.max(0, Math.min(time, this.duration));
        this.notify();
    }

    update() {
        if (!this.isPlaying) return;

        const now = performance.now();
        const deltaTime = (now - this.lastUpdateTime) / 1000; // in seconds
        this.lastUpdateTime = now;

        this.time += deltaTime * this.speed;

        if (this.time >= this.duration) {
            this.time = this.duration;
            this.pause();
        }
        
        this.notify();
    }

    onUpdate(callback) {
        this.listeners.push(callback);
    }

    notify() {
        for (const listener of this.listeners) {
            listener({
                time: this.time,
                duration: this.duration,
                isPlaying: this.isPlaying,
                speed: this.speed
            });
        }
    }
}
