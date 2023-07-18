function skillsMember() {
    var skills = ["HTML", "CSS", "JS", "React", "Node", "Python", "Django"];
    var member = {
        name: "John",
        age: 30,
        skills: skills,
        // The following is a method, which is a function inside an object
        // This method will print out all the skills of the member
        // The method is called printSkills()
        printSkills: function() {
            for (var i = 0; i < this.skills.length; i++) {
                console.log(this.skills[i]);
            }
        }
    };
    // The following is a function call
    // The function is called printSkills()
    // The function is being called on the object member
    // The function is being called on the object member
    member.printSkills();
}