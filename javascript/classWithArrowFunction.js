    // Not Clear
    class Human{
        constructor(gender){
            this.gender = gender;
        }

        getHumanGender = () => {
            console.log(this.gender);
        }
    }

    class Person extends Human{
        constructor(name,gender){
            name = name;
            super(gender);
        }

        getPersonName = () => {
            console.log(this.name);
        }

        getPerson = () => {
            console.log(this);
        }
    }

    let person1 = new Person("Paras","male");
    let person2 = new Person("Shaly","female");

    // person1.getPersonName();
    // person1.getHumanGender();

    // person2.getPersonName();
    // person2.getHumanGender();

    person1.getPerson();
    person2.getPerson();