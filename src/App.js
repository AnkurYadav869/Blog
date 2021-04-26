// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './Container/Navbar';
import CreateBlog from './Container/CreateBlog';
import { blogs } from './blog';
const App = () => {
	// const key = 'AIzaSyAq5f_VKTa1LzO5hZjoAesOukx4wBW5R5A';
	const [search, setSearch] = useState('');

	const searchValue = (val) => {
		// console.log(val);
		setSearch(val.toLocaleLowerCase());
	};

	const blogSearch = blogs.filter((blog) => {
		return blog.title.toLocaleLowerCase().includes(search);
	});
	return (
		<>
			<Navbar serach={searchValue} />
			<CreateBlog blog={blogSearch} />
		</>
	);
};

export default App;
