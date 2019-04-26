export function getStories() {
  // simulate an API call
  const stories = [
    {
      url: "https://picsum.photos/1080/1920",
      header: {
        heading: "Anirudh B S",
        subheading: "Posted 5h ago",
        profileImage: "https://picsum.photos/1000/1000"
      }
    },
    {
      url: "https://picsum.photos/1080/1920",
      header: {
        heading: "Anirudh B S",
        subheading: "Posted 32m ago",
        profileImage: "https://picsum.photos/1000/1000"
      }
    },
    {
      url: "https://picsum.photos/1080/1920",
      header: {
        heading: "mohitk05/react-insta-stories",
        subheading: "Posted 32m ago",
        profileImage: "https://picsum.photos/1000/1000"
      }
    },
    {
      url: "https://picsum.photos/1080/1920",
      header: {
        heading: "Anirudh B S",
        subheading: "Posted 32m ago",
        profileImage: "https://picsum.photos/1000/1000"
      }
    }
  ]
  return stories
}

export function getUsers() {
  return ["username1", "username2", "username3"]
}
