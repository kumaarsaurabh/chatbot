class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      const lowercase = message.toLowerCase();

      if(lowercase.includes("hello world")){
        this.actionProvider.helloWorldHandler();
        // console.log(message);
        // console.log(this.state);
        // console.log(this.actionProvider);
      }
    }
  }
  
  export default MessageParser;