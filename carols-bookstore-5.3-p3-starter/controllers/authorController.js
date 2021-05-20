const Author = require("../models/authorModel");

module.exports = {
	all: (request, response) => {
		Author.find({}, (error, allAuthors) => {
			if (error) {
				return error
			} else {
				response.render('pages/authorIndex', { data: allAuthors })
			}
		})
	},
	author_detail: (request, response) => {
		const { id } = request.params;
		response.send(`Display the details page of author with id of : ${id}`);
	},
	author_create_get: (request, response) => {
		response.send("Display page with a form to create a new author");
	},
	author_create_post: (request, response) => {
		const newAuthor = new Author ({
			firstName: request.body.firstName,
			lastName: request.body.lastName,
			birthYear: request.body.birthYear,
			bio: request.body.bio,
		})
		newAuthor.save();
		response.redirect('/authors');
	},
	author_update_get: (request, response) => {
		response.send("Display page with a form to update an author");
	},
	author_update_put: (request, response) => {
		const { author } = request.body;
		response.send(`Handle update author ${author} in the database`);
	},
	author_delete: (request, response) => {
		const { id } = request.params;
		response.send(`Handle delete author ${id} in the database`);
	}
};
