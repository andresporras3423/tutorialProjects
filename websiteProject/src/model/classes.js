export class project {
    constructor(code, name, director) {
        this.code = code;
        this.name=name;
        this.director=director;
    }
}

export class task {
    constructor(code, description, state, codeProject) {
        this.code = code;
        this.description=description;
        this.state= state; 
        this.codeProject=codeProject;
    }
}
