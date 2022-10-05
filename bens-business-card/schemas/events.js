export default {
  name: 'events',
  title: 'Events',
  type: 'document',
  fields: [
    {
      name: 'eventsTitle',
      title: 'Events Title',
      type: 'string'
    },
    {
      name: 'eventsText',
      title: 'Events Text',
      type: 'text'
    },
    {
      name: 'eventsAbout',
      title: 'Events About',
      type: 'text'
    },
    {
      name: 'eventsFacilitator',
      title: 'Events Facilitator',
      type: 'text'
    },
    {
      name: 'eventsImage',
      title: 'Events Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'eventsLink',
      title: 'Event Link',
      type: 'url'
    }
  ]
}
