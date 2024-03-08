import { v4 as uuidv4 } from 'uuid';

export class Bookmark {
    id: string

    constructor(public name: string, public url: string) {
        this.id = uuidv4();

        if(!name)
            if(url)
                this.name = new URL(url).hostname;
                /* return word[0].toUpperCase() + word.substr(1).toLowerCase(); */
        else
            this.name = name;
    }
}