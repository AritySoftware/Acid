What is Acid?
=======
Acid.js is a utility library for building CWAs (Conscious Web Apps). CWAs build themselves based on realtime application demands. Think of a bridge being formed in front of you while walking across. Instead of the entire step being formed little bits of it come exactly when needed. Acid embraces a modular philosophy that results in a complete separation of concerns.

_CWA's have several advantages over modern SPAs_
 - Scalability for large apps
 - Real-time
 - Fine grained self-construction
 - Less code
 - Faster development
 - Streaming apps

##### Methods
All methods are available from the root object typically $ and ACID as a fallback.

##### Model, Define & Module
In Acid everything is a model. Models can be created using "define","module","model". Models created using these methods have an info property accessed via "*._".

##### Module
Modules are asynchronously compiled models with built-in import capabilities. Dependencies can be imported and injected into the model's function when invoked.

##### Code Examples

    $.model('post',{
    	like:(node,event) => {
    		console.log('Post Liked');
    	},
    	other:(node,event) => {
    		console.log('other event launched');
    	}
    }); //returns a plain model

	//Example file import. $.require imports must have file extension.
  $.require({
    post:'post.js'
  });

##### Acid Stacks
- CWA Stack
	- Node
	- RethinkDB
	- Lucy
	- Acid
	- Menrvah (Coming soon)
- Default Stack
	- Node
	- RethinkDB or Mongo
	- Lucy
	- Acid
	- Ractive, React, Angular, Polymer, Vue
	- Co

##### Menrvah
Coming soon next generation web app framework & platform.
