import React from "react";
import { render, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";
import { ApiContext, ApiProvider, ApiConsumer } from ".";

afterEach(cleanup);

test("ApiConsumer shows default value", () => {});

/**
 * Test default values by rendering a context consumer without a
 * matching provider
 */
// test("ApiConsumer shows default value", () => {
//   const { asFragment, getByText } = render(<ApiConsumer />);
//   console.log(asFragment);
//   //expect(getByText("xxx")).toHaveTextContent("xxx");
// });

// test('NameConsumer shows value from provider', () => {
//     const tree = (
//       <NameContext.Provider value="C3P0">
//         <NameConsumer />
//       </NameContext.Provider>
//     )
//     const {getByText} = render(tree)
//     expect(getByText(/^My Name Is:/)).toHaveTextContent('My Name Is: C3P0')
//   })

/**
 * To test a component that provides a context value, render a matching
 * consumer as the child
 */
// test('NameProvider composes full name from first, last', () => {
//     const tree = (
//       <NameProvider first="Boba" last="Fett">
//         <NameContext.Consumer>
//           {value => <span>Received: {value}</span>}
//         </NameContext.Consumer>
//       </NameProvider>
//     )
//     const {getByText} = render(tree)
//     expect(getByText(/^Received:/).textContent).toBe('Received: Boba Fett')
//   })

/**
 * A tree containing both a provider and consumer can be rendered normally
 */
//   test('NameProvider/Consumer shows name of character', () => {
//     const tree = (
//       <NameProvider first="Leia" last="Organa">
//         <NameConsumer />
//       </NameProvider>
//     )
//     const {getByText} = render(tree)
//     expect(getByText(/^My Name Is:/).textContent).toBe('My Name Is: Leia Organa')
//   })
