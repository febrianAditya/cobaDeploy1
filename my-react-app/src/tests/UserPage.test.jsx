import { render, screen, fireEvent } from "@testing-library/react"
import UserPage from "../pages/UserPage"

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import store from "../store";



  

test("renders UserPage with data from Redux store", () => {

    // Render komponen dengan Provider Redux
    render(
      <Provider store={store}>
        <UserPage />
      </Provider>
    );
  
    // Pastikan elemen utama muncul
    const title = screen.getByText(/user page/i);
    expect(title).toBeInTheDocument();
  
    // Pastikan data dari Redux ditampilkan
    const dataText = screen.getByText((content) => content.includes('"name":"John Doe"'));
    // Pastikan data Redux (allUser) muncul
    // const userText = screen.getByText(/john doe/i);
    // expect(userText).toBeInTheDocument();
    expect(dataText).toBeInTheDocument();

});


test('renders a button with the correct text', () => {
    render(
        <Provider store={store}>
          <UserPage />
        </Provider>
    );
    const buttonElement = screen.getByText(/klik aku/i);
    expect(buttonElement).toBeInTheDocument();
});

test("renders UserPage and updates state dynamically on button click", () => {
    // Render komponen dengan Provider Redux
    render(
      <Provider store={store}>
        <UserPage />
      </Provider>
    );
  
    // Pastikan state dinamis awalnya 'Before'
    const dynamicText = screen.getByText("Before");
    expect(dynamicText).toBeInTheDocument();
  
    // Simulasikan klik pada tombol
    const button = screen.getByText(/klik aku/i);
    fireEvent.click(button);
  
    // Pastikan data dinamis berubah menjadi 'After' setelah klik
    const updatedDynamicText = screen.getByText("After");
    expect(updatedDynamicText).toBeInTheDocument();
});
  