const users = [];

const addUser = ({ id, name, workshop }) => {
  if (!name || !workshop) return { error: "Se requiere un usuario y sala" };
  name = name.trim().toLowerCase();
  workshop = workshop.trim().toLowerCase();

  const existingUser = users.find(
    (user) => user.workshop === workshop && user.name === name
  );

  if (existingUser)
    return {
      error: true,
    };

  const user = { id, name, workshop };

  users.push(user);

  return { user };
};

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) return users.splice(index, 1)[0];
};

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInWorkshop = (workshop) =>
  users.filter((user) => user.workshop === workshop);

module.exports = { addUser, removeUser, getUser, getUsersInWorkshop };
