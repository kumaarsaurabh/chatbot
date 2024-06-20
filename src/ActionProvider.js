class ActionProvider {
    constructor(
     createChatBotMessage,
     setStateFunc,
     createClientMessage,
     stateRef,
     createCustomMessage,
     ...rest
   ) {
     this.createChatBotMessage = createChatBotMessage;
     this.setState = setStateFunc;
     this.createClientMessage = createClientMessage;
     this.stateRef = stateRef;
     this.createCustomMessage = createCustomMessage;
   }

   helloWorldHandler = () => {
    const message = this.createChatBotMessage("Reply to Hello World !");
    this.setChatbotMessage(message);
   }

   setChatbotMessage = (message) => {
    this.setState(state => ({...state, messages: [...state.messages, message]}))
   }

 }
 
 export default ActionProvider;