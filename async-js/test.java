public class User {
    public String name ;
    public Integer age ;

    public User(String name, Integer age){
        this.name = name ;
        this.age = age ;
    }
}

User user = new User("aravind", 22);

user.name // "aravind"
user.age // 22