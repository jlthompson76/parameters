### Parameters with Requests

#### How to have parameters in Request

Parameters can be specified in the URL through the following syntax:
    ```app.get(‘/profile/:name’, (req, res) => {});```

Here, we are *requiring* that the URL in the browser should look like:
    ```localhost:3000/profile/*ahmad*``` or
    ```localhost:3000/profile/*kiki*```

And *not*
    ```localhost:3000/profile```

#### Accessing the values of parameters

For a given parameter, we can access its value like below:
    
    ```
    app.get(‘/profile/*:name*’, (req, res) => {
        const params = req.params; // This is an object  
        const username = params.name // OR params[‘name’'    
    });
    ```

So, for a URL like ```localhost:3000/profile/*ahmad*```  
params will look like: ```{name: ‘ahmad’}```
