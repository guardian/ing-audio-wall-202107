import { Component, render, h } from "preact";

export default class RelatedContent extends Component {
    render (props) {
        const cards = props.cards.map(v=> <div class="related-item" dangerouslySetInnerHTML={{__html: v.content}}></div>)
        return (
            <div class="related-items">
                {cards}
            </div>
        );
    }
}