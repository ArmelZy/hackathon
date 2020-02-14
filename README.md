# Authentication and user management for recruitment system with springboot and the JWT protocol
This project was developed as part of the hackathon launched through the innovatech company. It deals with subject 1 (JWT with Spring Boot). I decided to code the client with the powerful Angular framework(See the Angular ReadMe file at hackathon/src/main/webapp/).
Please Watch the full demo of this app by playing the demo.mp4 file which is located in the root directory.

## Built With

* 	[Maven](https://maven.apache.org/) - Dependency Management
* 	[JDK](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) - Java™ Platform, Standard Edition Development Kit 
* 	[Spring Boot](https://spring.io/projects/spring-boot) - Framework to ease the bootstrapping and development of new Spring Applications
* 	[MySQL](https://www.mysql.com/) - Open-Source Relational Database Management System
* 	[git](https://git-scm.com/) - Free and Open-Source distributed version control system 
* 	[Angular](https://angular.io/) - Modern server-side Java template engine for both web and standalone environments.
* 	[Lombok](https://projectlombok.org/) - Never write another getter or equals method again, with one annotation your class has a fully featured builder, Automate your logging variables, and much more.

## External Tools Used

* [Postman](https://www.getpostman.com/) - API Development Environment (Testing Documentation)
* [IntelliJ IDEA](https://www.jetbrains.com/idea/download/) - IDE for Java Spring Boot Developer

## To-Do

- [x] Setup spring boot and database project.
- [x] Configure Spring Security and implement User Registration.
- [x] Encode user password using BCrypt algorithm with spring security.
- [x] Implement login using JWT (Token generation).
- [x] Validate JWT on the server side and Manage(Create and Read) recruitment posts.
- [x] Setup Angular and design pages, registration in Angular, implementing CORS in Spring.
- [x] Implement Login in Angular.
- [x] Create and Verify JWT using Public and Private Key (Method using signature algorithm via HS512 lost generated token when we restart spring boot server application).
- [x] Implement Logout and Add new recruitment announce via Angular.
- [x] Display recruitment announcements.
- [x] Implement AuthGuard to secure the access to announce and add-announce URLs when the user is not authenticated.
- [x] Add footer, clean the design and write the ReadMe file.
- [ ] Waiting for final result.


## Running the application locally

There are several ways to run a Spring Boot application on your local machine. One way is to execute the `main` method in the `com.hackathon.challenge.HackathonApplication` class from your IDE.

- Download the zip or clone the Git repository.
- Unzip the zip file (if you downloaded one)
- Open Command Prompt and Change directory (cd) to folder containing pom.xml
- Open you IDE (IntelliJ/Eclipse) . I personally use IntelliJ IDEA
   - File -> Open -> Navigate to the folder where you unzipped the zip
   - Select the project
- Choose the Spring Boot Application file (search for @SpringBootApplication)
- Right Click on the file and Run as Java Application

Alternatively you can use the [Spring Boot Maven plugin](https://docs.spring.io/spring-boot/docs/current/reference/html/build-tool-plugins-maven-plugin.html) like so:

```shell
mvn spring-boot:run
```

### Security

```
<!-- https://mvnrepository.com/artifact/io.jsonwebtoken/jjwt-api -->
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt-api</artifactId>
    <version>0.11.0</version>
</dependency>

<!-- https://mvnrepository.com/artifact/io.jsonwebtoken/jjwt-impl -->
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt-impl</artifactId>
    <version>0.11.0</version>
    <scope>runtime</scope>
</dependency>

<!-- https://mvnrepository.com/artifact/io.jsonwebtoken/jjwt-jackson -->
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt-jackson</artifactId>
    <version>0.11.0</version>
    <scope>runtime</scope>
</dependency>
```

### URLs

|  URL |  Method | Body |
|----------|--------------|--------------|
|`http://localhost:8080/api/auth/signup`                           | POST | email, username and password|
|`http://localhost:8080/api/auth/login`                       | POST | username and password|
|`http://localhost:8080/api/posts/all`                       | GET | none|
|`http://localhost:8080/api/posts/get/{id}`                       | GET | recruitment announce id for the post|

## Documentation

* [Postman Collection](https://documenter.getpostman.com/view/2449187/RWTiwzb2) - online, with code auto-generated snippets in cURL, jQuery, Ruby,Python Requests, Node, PHP and Go programming languages
* [Postman Collection](https://github.com/AnanthaRajuC/Spring-Boot-Application-Template/blob/master/Spring%20Boot%20Template.postman_collection.json) - offline

## Files and Directories

The project (a.k.a. project directory) has a particular directory structure. A representative project is shown below:

```
└── hackathon
    ├── src
    │   ├── main
    │   │   ├── java
    │   │   │   └── com
    │   │   │       └── hackathon
    │   │   │           └── challenge
    │   │   │               ├── config
    │   │   │               ├── controller
    │   │   │               ├── dto
    │   │   │               ├── exception
    │   │   │               ├── model
    │   │   │               ├── repository
    │   │   │               ├── security
    │   │   │               └── service
    │   │   ├── resources
    │   │   │   ├── static
    │   │   │   └── templates
    │   │   └── webapp
    │   │       ├── e2e
    │   │       │   └── src
    │   │       ├── node_modules
    │   │       └── src
    │   │           ├── app
    │   │           │   ├── auth
    │   │           │   │   ├── login
    │   │           │   │   ├── register
    │   │           │   │   └── register-success
    │   │           │   ├── body
    │   │           │   │   ├── add-announce
    │   │           │   │   ├── announce
    │   │           │   │   ├── contact-us
    │   │           │   │   ├── faq
    │   │           │   │   └── home
    │   │           │   │       └── carousel
    │   │           │   ├── footer
    │   │           │   ├── header
    │   │           │   └── no-page-found
    │   │           ├── assets
    │   │           └── environments
    │   └── test
    │       └── java
    │           └── com
    │               └── hackathon
    │                   └── challenge
    └── target
        ├── classes
        │   ├── com
        │   │   └── hackathon
        │   │       └── challenge
        │   │           ├── config
        │   │           ├── controller
        │   │           ├── dto
        │   │           ├── exception
        │   │           ├── model
        │   │           ├── repository
        │   │           ├── security
        │   │           └── service
        │   └── META-INF
        ├── generated-sources
        │   └── annotations
        ├── generated-test-sources
        │   └── test-annotations
        └── test-classes
            ├── com
            │   └── hackathon
            │       └── challenge
            └── META-INF
```

## packages

- `config` — to config our spring boot app;
- `controller` — to listen to the client;
- `dto` — to hold our data transfer object;
- `exception` — to hold our custom exception;
- `model` — to hold our entities;
- `repository` — to communicate with the database;
- `security` — to manage our jwt;
- `service` — to hold our business logic;

- `resources/` - Contains all the static resources, templates and property files.
- `resources/static` - contains static resources such as css, js and images.
- `resources/application.properties` - It contains application-wide properties. Spring reads the properties defined in this file to configure your application. You can define server’s default port, server’s context path, database URLs etc, in this file.

- `test/` - contains unit and integration tests

- `pom.xml` - contains all the project dependencies
 
## Resources

* [Official angular documentation](https://angular.io/docs)
* [Official bootstrap documentation](https://getbootstrap.com/docs/4.4/getting-started/introduction/)
* [HTTP Status Codes](https://www.restapitutorial.com/httpstatuscodes.html)
* [Bootstrap w3schools](https://www.w3schools.com/bootstrap/)
* [Common application properties](https://docs.spring.io/spring-boot/docs/current/reference/html/common-application-properties.html)
