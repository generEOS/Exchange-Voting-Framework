import React, { useContext } from 'react';
import { ProducerContext } from '../contexts/ProducerContext';

const ProducerVoteDetail = (props) => {
    const proxy = useContext(ProducerContext).selectedProducerDetail;
    console.log(proxy)
    if(proxy != null) {
        return ( 
            <div className="proxy-vote-list">
                <div className="displaypic">
                    <img src={proxy.logo} width="100"/>
                </div>
                <div className="proxyName">
                    {proxy.name}
                </div>
                <div className="proxyUrl">
                    {proxy.url}
                </div>
                <div className="proxyDescription panel">
                    <header>Voting Philosophy</header>
                    {proxy.description}
                </div>
                
                <button onClick={()=>console.log('TODO: call voting')}>Vote</button>
            </div>
        );
    } else {
        return (<div></div>);
    }

}
 
export default ProducerVoteDetail;
