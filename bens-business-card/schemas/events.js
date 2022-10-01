export default {
  name: 'events',
  title: 'Events',
  type: 'document',
  fields: [
    {
      name: 'eventTitle',
      title: 'Event Title',
      type: 'string'
    },
    {
      name: 'eventText',
      title: 'Event Text',
      type: 'text'
    },
    {
      name: 'eventImage',
      title: 'Event Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'eventLink',
      title: 'Event Link',
      type: 'url'
    }
  ]
}
