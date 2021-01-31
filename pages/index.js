import {promises as fs} from 'fs'
import path from 'path'
import {Lesson} from "../components/Lesson";
import Link from "next/link"

export default function Home({lessons}) {
    return (
        <ol>
            {lessons.map((lesson) => (
                    <li key={lesson.id}>
                        <Lesson key={lesson.id} lesson={lesson}/>
                    </li>
                )
            )}
        </ol>
    )
}

export async function getStaticProps(context) {
    const lessonsFile = path.join(process.cwd(), 'lessons.json')
    const {lessons} = JSON.parse(await fs.readFile(lessonsFile, 'utf-8'))

    return {
        props: {
            lessons
        },
    }
}
