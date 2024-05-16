import { http, HttpResponse } from 'msw'


 

const mochArticle = {
        authorId: 10, 
        body: 'I am a test article.',
        claps: {},
        comments: [],
        id: 5,
        photoUrl: 'testPhotoUrl',
        updatedAt: "2024-02-19T01:00:05.826Z",
        userPhotoUrs: "../default-user.jpg",
        username: "Test User"
}

export const handlers = [
    http.get(`/api/articles/:articleId`, ({ params }) => {
    return HttpResponse.json(mochArticle)
  }),
]






