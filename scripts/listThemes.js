class ThemeItem {
    constructor (
        id,
        themeName,
        status,
    ) {
        this.id = id;
        this.themeName = themeName;
        this.status = status;
    }
    render() {
        return `<div class="combo-list-item" name="theme${this.id}">
                    <input class="combo-list-input" type="checkbox" id="theme${this.id}" name="themeList" value="${this.themeName}" data-id=${this.id}>
                    <label for="compRu">${this.themeName}</label>
                </div>`;
    }
}

class ThemeList {
    constructor() {
        this.cthemes = [];
    }
    fetchTheme() {
        this.cthemes = themes;
    }
    render() {
        let listHtmlTheme = '';
        this.cthemes.forEach( cthemes => {
            const themeItem = new ThemeItem(
                cthemes.id,
                cthemes.themeName,
                cthemes.status,
            );
            listHtmlTheme += themeItem.render();
        });
        document.querySelector('#themeChoiceList').innerHTML = listHtmlTheme;
    }
}

const listTheme = new ThemeList();
listTheme.fetchTheme();
listTheme.render();
