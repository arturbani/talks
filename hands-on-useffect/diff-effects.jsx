const Greeting = ({ name }) => {
  useEffect(() => {
    document.title = 'Hello, ' + name;
  });
  
  return (
    <h1 className="Greeting">
      Hello, {name}
    </h1>
  );
}

// #################################  

const oldProps = {className: 'Greeting', children: 'Roberto'};
const newProps = {className: 'Greeting', children: 'Roberto, corta essa'};

// #################################  

domNode.innerText = 'Roberto, corta essa';

// #################################  

const oldEffect = () => { document.title = 'Roberto'; };
const newEffect = () => { document.title = 'Roberto'; };

// #################################  

const oldEffect = () => { document.title = 'Hello, Dan'; };
const oldDeps = ['Dan'];

const newEffect = () => { document.title = 'Hello, Dan'; };
const newDeps = ['Dan'];  