import { Cards, Words, arrWords, arrCards } from './data';

export class CardsData extends Cards {
    public constructor(init?: Partial<Cards>) {
        super(init);
    }
    private words: Array<Words> = null;

    public static AllCards(): CardsData[] {
        return arrCards.map(it => new CardsData(it)).sort((x, y) => x.name.localeCompare(y.name));
    }
    public WordsForCard(): Words[] {
        if (this.words == null) {
            this.words = arrWords.filter(it => it.cardsID === this.ID).sort((x, y) => x.name.localeCompare(y.name));
        }
        return this.words;

    }

}
