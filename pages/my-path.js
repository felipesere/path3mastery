import {promises as fs} from 'fs'
import path from 'path'

export default function MyPath({done, current, todo}) {
    return (
        <main>
            <section>
                <h1>Done:</h1>
                <ol>
                    {done.map(lesson => <li key={lesson.id}>{lesson.title}</li>)}
                </ol>
            </section>
            <section>
                <h1>Current:</h1>
                {current.title}
            </section>
            <section>
                <h1>Todo:</h1>
                <ol>
                    {todo.map(lesson => <li key={lesson.id}>{lesson.title}</li>)}
                </ol>
            </section>
        </main>
    )
}

export async function getStaticProps(context) {
    const lessonsFile = path.join(process.cwd(), 'lessons.json')
    const {lessons} = JSON.parse(await fs.readFile(lessonsFile, 'utf-8'))

    const done = lessons.filter(l => l.status === 'done')
    const current = lessons.find(l => l.status === 'current')
    const todo = lessons.filter(l => l.status === 'todo')

    return {
        props: {
            done,
            current,
            todo
        },
    }
}
