import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level} = useContext(ChallengesContext)
    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/49160989?s=200&u=3b91b400a2fed2798905f437985e231854d204ab&v=4" alt="imagem" />
            <div>
                <strong>Gabriel Fonseca</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level {level}</p>
            </div>
        </div>
    )
}