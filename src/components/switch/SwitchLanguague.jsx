import i18nnext from 'i18next';
//import { useTranslation } from 'react-i18next';

const SwitchLanguague = () => {
    return (
        <>
            <div className="switch-lang">
                <button onClick={() => i18nnext.changeLanguage('en')}>en</button>
                <button onClick={() => i18nnext.changeLanguage('fr')}>fr</button>
                <button onClick={() => i18nnext.changeLanguage('ar')}>ar</button>
            </div>
        </>
    )
}

export default SwitchLanguague;