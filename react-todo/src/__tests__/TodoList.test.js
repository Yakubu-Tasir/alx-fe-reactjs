import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';
import '@testing-library/jest-dom'; // Vital for "toBeInTheDocument"

describe('TodoList Component', () => {
  test('renders TodoList component', () => {
    render(<TodoList />);
    expect(screen.getByText(/Todo List/i)).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/Add a new todo/i);
    const addButton = screen.getByText(/Add Todo/i);
    
    fireEvent.change(input, { target: { value: 'Test Task' } });
    fireEvent.click(addButton);
    
    expect(screen.getByText('Test Task')).toBeInTheDocument();
  });

  test('deletes a todo', () => {
    render(<TodoList />);
    const deleteButtons = screen.getAllByText(/Delete/i);
    const initialCount = deleteButtons.length;
    
    fireEvent.click(deleteButtons[0]);
    expect(screen.queryAllByText(/Delete/i).length).toBeLessThan(initialCount);
  });
});