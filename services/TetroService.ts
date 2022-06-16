const baseUrl = 'http://localhost:8081/tetrominos';

export const getTetro = async () => {
    return await fetch(`${baseUrl}`).then((response) => response.json()) 
}
