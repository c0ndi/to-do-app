class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            items: [],
            item: '',
        }
    }
    handleChangeValue = (e) => {
        let value = e.target.value;
        this.setState({ item: value, });
    }
    handleAddTask = (e) => {            
        let items = this.state.items;
        let item = this.state.item;
        e.preventDefault()
        if(item.length > 0 && !items.includes(item))
        {   
            items.push(item)
            this.setState({ 
                items: items,
                item: '',
            });
        }
        
    } 
    handleRemoveItem(item){
        let finalArray = []
        this.state.items.forEach(element => {
            if(element != item)
            {
                finalArray.push(element)        
            }
        })
        this.setState({ 
            items: finalArray,
        });
    }
    render() { 
        return (     
            <React.Fragment>
                <div className="section">
                <h1 clasName="section-header">TODOS {'<App/>'}</h1>
                    <div className="to-do container">
                        <form className="input-to-do" >
                            <input type="text" placeholder="Enter your task" onChange={this.handleChangeValue} value={this.state.item}/>
                            <button onClick={this.handleAddTask}>Add Task</button>
                        </form>
                        <div className="to-do-tasks">
                            <div class="tasks">
                                {!this.state.items.length > 0?  <span className="span-info">No task right now.</span> : null}
                                {this.state.items.map( item => {
                                    return(
                                        <div className="task-container" id={item}>
                                            <span className="span-task">{item}</span>
                                            <button className="remove-btn" onClick={this.handleRemoveItem.bind(this, item)} id={item}>Remove</button>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div> 
            </React.Fragment>
        );
    }
}

ReactDOM.render( < App/> , document.getElementById('root')) 
