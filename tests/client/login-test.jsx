const React = require('react');
const {mount} = require('enzyme');
const {MemoryRouter} = require('react-router-dom');

const {overrideFetch, asyncCheckCondition} = require('../mytest-utils');
const {app} = require('../../src/server/app');


const {Login} = require('../../src/client/login');
const {resetAllUsers} = require('../../src/server/db/users');


beforeEach(resetAllUsers);


function fillForm(driver, id, password){

    const userIdInput = driver.find("#userIdInput").at(0);
    const passwordInput = driver.find("#passwordInput").at(0);
    const loginBtn = driver.find("#loginBtn").at(0);

    userIdInput.simulate('change', {target: {value: id}});
    passwordInput.simulate('change', {target: {value: password}});

    loginBtn.simulate('click');
}

test("Test fail login", async () => {

    overrideFetch(app);

    const driver = mount(
        <MemoryRouter initialEntries={["/login"]}>
            <Login/>
        </MemoryRouter>
    );

    fillForm(driver, "foo", "123");

    const error = await asyncCheckCondition(
        () => {driver.update(); return driver.html().includes("Invalid userId/password")},
        2000 ,200);

    expect(error).toEqual(true);
});