const ChatForm = (props) => { 
    const handleSubmit = (e) => {
        e.preventDefault()
        // var axios = require('axios');
        // // var data = {
        // //   "title": username,
        // //   "secret": password,
        // //   "email": email,
        // // };
        // var config = {
        //   method: 'post',
        //   url: 'https://api.chatengine.io/users/',
        //   headers: {
        //     'PRiVATE-KEY': '{{5c9a9002-8a88-4f9b-ad84-5992ebd485d9}}'
        //   },
        // //   data:data
        // }
    
      
        // axios(config)
        // .then(function(response) {
        //   console.log(JSON.stringify(response.data));
        // }).catch(function (error) {
        //   console.log(error);
        // })
        console.log(props)
      }


    return (
        <div className="chatForm">
            <form action="" onSubmit={handleSubmit}>
                <input type="text"
                    placeholder="Add New Chat"
                        />
                <button onClick={handleSubmit}>Add</button>
            </form>
        </div>
    );
}
 
export default ChatForm;