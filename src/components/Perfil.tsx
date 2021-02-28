import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { ChallengesContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level } = useContext(ChallengesContext)

    const [img, setImg] = useState('')
    const [name, setName] = useState("")
    const [inputName, setInputName] = useState("");


    function getInfoUserGitHub(input: String) {
        axios.get(`https://api.github.com/users/${input}`).then(result => {
            if (result) {
                setImg(result.data.avatar_url);
                setName(result.data.name);
            }
        }).catch(() => {
            Swal.fire(
                "Atenção",
                `Desculpe, não foi possível encontrar um usuário com o login de ${inputName}`,
                'warning'
                )
                setInputName('');
        });
    }

    useEffect(() => {
        getInfoUserGitHub('Github');
    }, [])

    function handleInputName(e) {
        setInputName(e.target.value)
    }

    function getUserGit() {
        getInfoUserGitHub(inputName);
    }

    return (
        <div>
            <div style={{ display: 'flex' }}>
                <input type="text" placeholder="User do GitHub" onChange={(e) => handleInputName(e)} value={inputName} className={styles.inputUserGit} />
                <button type="button" onClick={getUserGit} className={styles.btnUserGit}> Procurar </button>
            </div>
            <div className={styles.profileContainer}>
                <img src={img} alt="imagem" />
                <div>
                    <strong>{name}</strong>
                    <p>
                        <img src="icons/level.svg" alt="level" />
                    Level {level}</p>
                </div>
            </div>
        </div>
    )
}