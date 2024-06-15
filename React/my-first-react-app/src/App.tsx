import React from 'react';
import HelloWorld from './components/HelloWorld';
import HelloWorld2 from './components/HelloWorld2';
const App: React.FC = () => {
return (
<>
<div className="bg-indigo-100 h-96 flex justify-center
items-center">
<HelloWorld />
</div>
<div className="bg-red-100 h-screen flex justify-center
items-center">
<HelloWorld2 name="Pius" />
</div>
</>
);
}
export default App;