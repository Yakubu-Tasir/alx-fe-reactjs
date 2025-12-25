import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders the initial render of TodoList correctly', () => {
    render(<TodoList />);
    expect(screen.getByText('Todo List')).toBeInTheDocument();
    expect(screen.getByText('Learn React')).toBeInTheDocument();
  });

  test('can add a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new todo');
    const addButton = screen.getByText('Add Todo');
    
    fireEvent.change(input, { target: { value: 'Wash Car' } });
    fireEvent.click(addButton);
    
    expect(screen.getByText('Wash Car')).toBeInTheDocument();
  });

  test('can toggle a todo completion status', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Learn React');
    
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: line-through');
    
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: none');
  });

  test('can delete a todo', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Learn React');
    // Get the delete button specifically for the first todo
    const deleteButton = screen.getAllByText('Delete')[0];
    
    fireEvent.click(deleteButton);
    expect(todoItem).not.toBeInTheDocument();
  });
});