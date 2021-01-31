import {useState, useEffect} from "react"
import {promises as fs} from 'fs'
import path from 'path'
import {Lesson} from "../components/Lesson";
import {Grid} from "@material-ui/core";

export default function Home({lessons}) {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => setLoading(false), 3000)
    }, [])

    return (
        <Grid container justify="center" spacing={4}>
            {lessons.map((lesson) => {
                return (
                    <Grid item key={lesson.id}>
                        <Lesson key={lesson.id} lesson={lesson}/>
                    </Grid>
                )
            })}
        </Grid>
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
