class User {
    constructor ( fullname , email , id , picture , username ){
        this.fullname = fullname;
        this.email = email;
        this.id = id;
        this.picture = picture;
        this.username = username;
    }

    saveUser() {
        let person = {
            fullname : this.fullname,
            email : this.email,
            id : this.id,
            picture : this.picture,
            username : this.username
        };
        localStorage.setItem("user", JSON.stringify(person));
    }
}
export default User;