import React from 'react';

class GithubProfile extends React.Component{

    constructor(){
        super();

        this.state = {
            userProfile: null,
            loading:false,
            userName:'',
        }

    }

    getResult = () =>{
        this.setState({ loading:true })
        var urlToFetch = 'https://api.github.com/users/' + this.state.userName;
        var fetchData = fetch(urlToFetch);
        fetchData.then( (response)=>{
            var userData = response.json();
            userData.then( (dataObj)=>{
                this.setState({
                    userProfile: dataObj,
                    loading:false,
                })
            } )
        })
    }

    userUpdate = (event) =>{
        this.setState({
            userName: event.target.value,
        })
    }

    renderCondition = valueToRender =>{
        if(this.state.userProfile === null){
            return "";
        }else if(this.state.loading){
            return "Loading..."
        }else{
            return this.state.userProfile[valueToRender];
        }
    }    

    render(){
        const imageStyle = {
            width: "100px",
        };
        return(
            <div>
                <h3>Search Github Account </h3>
                <input type="text" onInput={this.userUpdate}/>
                <button onClick={this.getResult}>Search</button>
                <h1>Github User Profile </h1>
                <img style={imageStyle} src={this.renderCondition('avatar_url')} alt={this.renderCondition('login')}/>
                <h2>{this.renderCondition('login')}</h2>
                <p>Github Profile Link: <a href={this.renderCondition('html_url')} target="_blank">{this.renderCondition('html_url')}</a></p>
                <p>Created Account At: {this.renderCondition('created_at')}</p>
                <p>Updated Account At: {this.renderCondition('updated_at')}</p>
            </div>
        )
    }
}

export default GithubProfile;