export function Lesson({lesson}) {
    return (
      <ul>
          <li>Title: {lesson.title}</li>
          <li>Subtitle: {lesson.subtitle}</li>
          <li>Description: {lesson.description}</li>
      </ul>
    )
}
