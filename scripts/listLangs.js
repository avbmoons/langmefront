class PrimLangItem {
    constructor (
        id,
        langName,
        langNative,
        langAlias,
        status,
        position,
    ) {
        this.id = id;
        this.langName = langName;
        this.langNative = langNative;
        this.langAlias = langAlias;
        this.status = status;
        this.position = position;
    }
    render() {
        return `<div class="combo-list-item" name="item${this.langAlias}">
                    <input class="combo-list-input" type="radio" id="prim${this.langAlias}" name="primLang" value="${this.langName} - ${this.langNative}" data-id=${this.id}>
                    <label for="prim${this.langAlias}">${this.langName} - ${this.langNative}</label>
                </div>`;
    }
}

class CompLangItem {
    constructor (
        id,
        langName,
        langNative,
        langAlias,
        status,
        position,
    ) {
        this.id = id;
        this.langName = langName;
        this.langNative = langNative;
        this.langAlias = langAlias;
        this.status = status;
        this.position = position;
    }
    render() {
        return `<div class="combo-list-item" name="item${this.langAlias}">
                    <input class="combo-list-input" type="checkbox" id="comp${this.langAlias}" name="compLang" value="${this.langName}"  data-id=${this.id}>
                    <label for="comp${this.langAlias}">${this.langName} - ${this.langNative}</label>
                </div>`;
    }
}

class AppLangItem {
    constructor (
        id,
        langName,
        langNative,
        langAlias,
        status,
        position,
    ) {
        this.id = id;
        this.langName = langName;
        this.langNative = langNative;
        this.langAlias = langAlias;
        this.status = status;
        this.position = position;
    }
    render() {
        return `<button class="menu-item header" id="appLang${this.langAlias}" onclick="closeAppLangChoiceList()">${this.langAlias}</button>`;
    }
}

class PrimLangList {
    constructor() {
        this.clangs = [];
    }
    fetchPrimLang() {
        this.clangs = langs;
    }
    render() {
        let listHtmlPrimLang = '';
        this.clangs.forEach( clangs => {
            const primLangItem = new PrimLangItem(
                clangs.id,
                clangs.langName,
                clangs.langNative,
                clangs.langAlias,
                clangs.status,
                clangs.position,
            );
            listHtmlPrimLang += primLangItem.render();
        });
        document.querySelector('#primLangChoiceList').innerHTML = listHtmlPrimLang;
    }
}

class CompLangList {
    constructor() {
        this.clangs = [];
    }
    fetchCompLang() {
        this.clangs = langs;
    }
    render() {
        let listHtmlCompLang = '';
        this.clangs.forEach( clangs => {
            const compLangItem = new CompLangItem(
                clangs.id,
                clangs.langName,
                clangs.langNative,
                clangs.langAlias,
                clangs.status,
                clangs.position,
            );
            listHtmlCompLang += compLangItem.render();
        });
        document.querySelector('#compLangChoiceList').innerHTML = listHtmlCompLang;
    }
}

class AppLangList {
    constructor() {
        this.clangs = [];
    }
    fetchAppLang() {
        this.clangs = langs;
    }
    render() {
        let listHtmlAppLang = '';
        for (let i=0; i<2; i++) {
            //console.log(this.clangs[i]);
            //const appLangItem = this.clangs[i];
            const appLangItem = new AppLangItem(
                this.clangs[i].id,
                this.clangs[i].langName,
                this.clangs[i].langNative,
                this.clangs[i].langAlias,
                this.clangs[i].status,
                this.clangs[i].position,
            );
            //console.log(appLangItem);
            listHtmlAppLang += appLangItem.render();
        };
        document.querySelector('#appLangChoice').innerHTML = listHtmlAppLang;
    }
}

const listPrimLang = new PrimLangList();
listPrimLang.fetchPrimLang();
listPrimLang.render();

const listCompLang = new CompLangList();
listCompLang.fetchCompLang();
listCompLang.render();

const listAppLang = new AppLangList();
listAppLang.fetchAppLang();
listAppLang.render();