const root2 = document.getElementById("root-jsx");
       
        function GreetUser(user) {
            return <h1>Hello {user.username}!</h1> // // template string
        }
        
        function Heading2() {
            return <div> 
                <GreetUser useremail="ali@gmail.com" username="Ali" ></GreetUser>
                <GreetUser useremail="azlan@gmail.com" username="Azlan" ></GreetUser>
            <h1>My First React Website With Jsx</h1>
            </div>
        }

        function Description() {
            return <p>This is my React website</p>
        }
        
        function App() {
            return <div>
                <Heading2></Heading2>
                <Description></Description>
            </div>
        }


        ReactDOM.render(<App></App>, root2)