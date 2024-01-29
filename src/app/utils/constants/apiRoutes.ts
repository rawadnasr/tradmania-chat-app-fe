export const apiRoutes = {
    user: {
        list: 'user',
        create: () => `${apiRoutes.user.list}`,
        get: (id: string) => `${apiRoutes.user.list}/${id}`,
        update: (id: string) => `${apiRoutes.user.list}/${id}`,
        userConversations: (id: string) => `${apiRoutes.user.list}/${id}/${apiRoutes.conversation.list}`,
    },
    match: {
        list: 'match',
        create: () => `${apiRoutes.match.list}`,
        get: (id: string) => `${apiRoutes.match.list}/${id}`,
        update: (id: string) => `${apiRoutes.match.list}/${id}`,
    },
    message: {
        list: 'message',
        create: () => `${apiRoutes.message.list}`,
        get: (id: string) => `${apiRoutes.message.list}/${id}`,
        update: (id: string) => `${apiRoutes.message.list}/${id}`,
    },
    conversation: {
        list: 'conversation',
        create: () => `${apiRoutes.conversation.list}`,
        get: (id: string) => `${apiRoutes.conversation.list}/${id}`,
        update: (id: string) => `${apiRoutes.conversation.list}/${id}`,
    },
}