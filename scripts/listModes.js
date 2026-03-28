class ModeItem {
    constructor (
        id,
        modeName,
        status,
    ) {
        this.id = id;
        this.modeName = modeName;
        this.status = status;
    }
    render() {
        return `<input type="radio" class="mode-button" name="modeButton" class="mode-button" id="setMode${this.modeName}" data-id=${this.id} value=${this.modeName}>
                <label for="setMode${this.modeName}" class="mode-button-label">${this.modeName}</label>`;
    }
}

class ModeList {
    constructor() {
        this.cmodes = [];
    }
    fetchMode() {
        this.cmodes = modes;
    }
    render() {
        let listHtmlMode = '';
        this.cmodes.forEach( cmodes => {
            const modeItem = new ModeItem(
                cmodes.id,
                cmodes.modeName,
                cmodes.status,
            );
            listHtmlMode += modeItem.render();
        });
        document.querySelector('#modeChoice').innerHTML = listHtmlMode;
    }
}

const listMode = new ModeList();
listMode.fetchMode();
listMode.render();
