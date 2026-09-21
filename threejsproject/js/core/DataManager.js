export class DataManager {
    constructor() {
        this.data = []; // Array of { time, scale, rotation, value }
        this.maxTime = 0;
    }

    async loadDataFromUrl(url) {
        try {
            const response = await fetch(url);
            const text = await response.text();
            
            if (url.endsWith('.json')) {
                this.parseJSON(text);
            } else if (url.endsWith('.csv')) {
                this.parseCSV(text);
            } else {
                throw new Error("지원하지 않는 파일 형식입니다. JSON 또는 CSV를 사용해주세요.");
            }
        } catch (error) {
            console.error("데이터 로드 실패:", error);
        }
    }

    async loadDataFromFile(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const text = e.target.result;
                    if (file.name.endsWith('.json')) {
                        this.parseJSON(text);
                    } else if (file.name.endsWith('.csv')) {
                        this.parseCSV(text);
                    }
                    resolve();
                } catch (error) {
                    reject(error);
                }
            };
            reader.readAsText(file);
        });
    }

    parseJSON(jsonString) {
        const parsed = JSON.parse(jsonString);
        this.setData(parsed);
    }

    parseCSV(csvString) {
        const lines = csvString.trim().split('\n');
        const headers = lines[0].split(',').map(h => h.trim());
        
        const parsed = [];
        for (let i = 1; i < lines.length; i++) {
            const values = lines[i].split(',').map(v => parseFloat(v.trim()));
            const obj = {};
            headers.forEach((header, index) => {
                obj[header] = values[index];
            });
            parsed.push(obj);
        }
        this.setData(parsed);
    }

    setData(dataArray) {
        // Sort by time just in case
        this.data = dataArray.sort((a, b) => a.time - b.time);
        if (this.data.length > 0) {
            this.maxTime = this.data[this.data.length - 1].time;
        } else {
            this.maxTime = 0;
        }
    }

    getDuration() {
        return this.maxTime;
    }

    // Interpolates data for a given timestamp
    getStateAtTime(time) {
        if (this.data.length === 0) return null;
        
        if (time <= this.data[0].time) return this.data[0];
        if (time >= this.data[this.data.length - 1].time) return this.data[this.data.length - 1];

        // Find the two keyframes bounding the current time
        let index = 0;
        while (index < this.data.length - 1 && this.data[index + 1].time < time) {
            index++;
        }

        const startFrame = this.data[index];
        const endFrame = this.data[index + 1];

        const t = (time - startFrame.time) / (endFrame.time - startFrame.time);

        // Simple linear interpolation for all numeric properties
        const interpolated = {};
        for (const key in startFrame) {
            if (key === 'time') {
                interpolated[key] = time;
            } else {
                interpolated[key] = startFrame[key] + (endFrame[key] - startFrame[key]) * t;
            }
        }

        return interpolated;
    }
}
