export default {
    name:"post",
    type:"document",
    title:"Post",
    groups:[
        {
            name:"content",
            title:"Content"

        },
      {  name:"meta",
        title:"Meta"}
    ],
    fields: [
        {
          name: 'meta_title',
          type: 'string',
          title: 'Meta title',
          validation:Rule=>Rule.required(),
          group:"meta"

        },
        {
            name:"title",
            type: 'string',
            title: 'Title',
            validation:Rule=>Rule.required(),
            group:"content"

        },
        {
            name:"publishedDate",
            type:"date",
            title: 'Published Date',
            validation:Rule=>Rule.required(),
            group:"content"
        },
        {
            name:"image",
            type:"image",
            title: 'Image',
            validation:Rule=>Rule.required(),
            fields: [
                {
                  name: 'caption',
                  type: 'string',
                  title: 'Caption',
                  options: {
                    isHighlighted: true
                  }
                },
                {
                  name: 'attribution',
                  type: 'string',
                  title: 'Attribution',
                }
              ],
              group:"content"
        },
        
        {
          title: 'Slug',
          name: 'slug',
          type: 'slug',
          options: {
            source: 'title',
            maxLength: 200, 
            slugify: input => input
                                 .toLowerCase()
                                 .replace(/\s+/g, '-')
                                 .slice(0, 200)
          },
          validation:Rule=>Rule.required(),
          group:"content"
        },
        {
            title: 'Description',
            name: 'description',
            type: 'text',
            validation:Rule=>Rule.required(),
            group:"content"
        },
        {
            name:"body",
            title:"body content",
            type:"array",
            of:[
                {type:"block",
            
            },
                {type:"image"}
            ],
            validation:Rule=>Rule.required(),
            group:"content"
        }

    
      ]
}