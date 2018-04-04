import { Component, State } from '@stencil/core';


@Component({
  tag: 'vote-square-container',
  styleUrl: 'vote-square-container.css'
})
export class VoteSquareContainer {

  @State() value: string;
  @State() votes: string[] = ["6", "4", "8", "9"]; //'fetched' from db

  setValue(h) {
    this.value = h.detail;
  }

  render() {
    return (
      <div class='vote-square-container'>
        <p>Selected Value: {this.value}</p>

        <vote-square onSquareSelected={ h => this.setValue(h) } label="Custom"
          isEditable={true}>
        </vote-square>

        {this.votes.map((v) =>
          <vote-square onSquareSelected={ h => this.setValue(h) } hours={v}>
          </vote-square>
        )}
      </div>
    );
  }
}
