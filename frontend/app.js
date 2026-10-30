fetch('/api/items')
	.then(r => r.json())
	.then(items => {
		const ul = document.getElementById('items');
		items.forEach(i => {
			const li = document.createElement('li');
			li.textContent = i.name;
			ul.appendChild(li);
		});
	});