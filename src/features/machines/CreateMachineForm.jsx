import {
    generateTimeOptions,
    getTodayString,
} from "../../utils/datetimeHelper";
import { useForm } from "react-hook-form";
import { DEFAULT_MACHINE_CONFIG } from "../../utils/constants";
import styled, { css } from "styled-components";
import Button from "../../ui/components/Button";
import Heading from "../../ui/components/Heading";
import Select from "../../ui/components/Select";
import { FaMugHot, FaTemperatureArrowDown } from "react-icons/fa6";

const Form = styled.form`
    width: 80rem;
    overflow: hidden;
    font-size: 1.6rem;
`;

const FormRow = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 18rem 1fr 1.2fr;
    gap: 2.4rem;

    padding: 1.2rem 0;

    &:first-child {
        padding-top: 0;
    }

    &:last-child {
        padding-bottom: 0;
    }

    &:not(:last-child) {
        border-bottom: 1px solid var(--color-grey-100);
    }

    &:has(button) {
        display: flex;
        justify-content: flex-end;
        gap: 1.2rem;
    }
`;

const Input = styled.input`
    border: 1px solid var(--color-grey-300);
    background-color: var(--color-grey-0);
    border-radius: var(--border-radius-sm);
    padding: 0.5rem 1rem;
    box-shadow: var(--shadow-sm);
    line-height: 3rem;

    ${(props) =>
        props.size === "small" &&
        css`
            width: 6rem;
        `}
    ${(props) =>
        props.size === "medium" &&
        css`
            width: 12rem;
        `}
`;

const InputWrapper = styled.div`
    display: flex;
    justify-content: stretch;
    align-items: center;
    gap: 1rem;
`;

const Label = styled.label`
    font-weight: 500;
    text-align: right;
`;

const Error = styled.span`
    font-size: 1.4rem;
    color: var(--color-red-700);
`;

function CreateMachineForm({ onCloseModal }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: DEFAULT_MACHINE_CONFIG,
    });

    function onSubmit(data) {
        console.log(data);
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Heading as="h2">Register New Machine</Heading>
            <FormRow>
                <Label htmlFor="name">Machine Name</Label>
                <Input
                    type="text"
                    id="name"
                    {...register("name", {
                        required: "This field is required.",
                    })}
                />
                {errors?.name?.message && <Error>{errors.name.message}</Error>}
            </FormRow>

            <FormRow>
                <Label htmlFor="status">Status</Label>
                <InputWrapper>
                    <Input
                        type="radio"
                        value="active"
                        {...register("status", {
                            required: "This field is required.",
                        })}
                    />
                    <span>active</span>
                    <Input
                        type="radio"
                        value="in-active"
                        {...register("status", {
                            required: "This field is required.",
                        })}
                    />
                    <span>in-active</span>
                </InputWrapper>
                {errors?.status?.message && (
                    <Error>{errors.status.message}</Error>
                )}
            </FormRow>
            <FormRow>
                <Label htmlFor="status">Operation Hours</Label>
                <InputWrapper>
                    <span>Open: </span>
                    <Select
                        options={generateTimeOptions()}
                        onChange={() => {}}
                    />
                    <span>Close: </span>
                    <Select
                        options={generateTimeOptions()}
                        onChange={() => {}}
                    />
                </InputWrapper>
                {errors?.openTime?.message && (
                    <Error>{errors.openTime.message}</Error>
                )}
            </FormRow>
            <FormRow>
                <Label htmlFor="status">Cold Menu Temperature</Label>
                <InputWrapper>
                    <FaTemperatureArrowDown />
                    <Input
                        type="text"
                        size="small"
                        id="coldTemp"
                        {...register("coldTemp", {
                            required: "This field is required.",
                        })}
                    />
                    <span>celcius</span>
                </InputWrapper>
                {errors?.coldTemp?.message && (
                    <Error>{errors.coldTemp.message}</Error>
                )}
            </FormRow>
            <FormRow>
                <Label htmlFor="status">Hot Menu Temperature</Label>
                <InputWrapper>
                    <FaMugHot />
                    <Input
                        type="text"
                        size="small"
                        id="hotTemp"
                        {...register("hotTemp", {
                            required: "This field is required.",
                        })}
                    />
                    <span>celcius</span>
                </InputWrapper>
                {errors?.hotTemp?.message && (
                    <Error>{errors.hotTemp.message}</Error>
                )}
            </FormRow>
            <FormRow>
                <Label htmlFor="status">Installed Date</Label>
                <Input
                    type="date"
                    id="installedDate"
                    defaultValue={getTodayString()}
                    {...register("installedDate")}
                ></Input>
                {errors?.installedDate?.message && (
                    <Error>{errors.installedDate.message}</Error>
                )}
            </FormRow>

            <FormRow>
                <Label htmlFor="status">Address</Label>
                <Input
                    type="text"
                    id="address"
                    {...register("address", {
                        required: "This field is required",
                    })}
                ></Input>
                {errors?.address?.message && (
                    <Error>{errors.address.message}</Error>
                )}
            </FormRow>

            <FormRow>
                <Label htmlFor="status">City</Label>
                <Input
                    type="text"
                    id="city"
                    defaultValue="Bangkok"
                    {...register("city", {
                        required: "This field is required",
                    })}
                />
                {errors?.city?.message && <Error>{errors.city.message}</Error>}
            </FormRow>
            <FormRow>
                <Label htmlFor="status">Country</Label>
                <Input
                    type="text"
                    id="country"
                    defaultValue="Thailand"
                    {...register("country", {
                        required: "This field is required",
                    })}
                />
                {errors?.country?.message && (
                    <Error>{errors.country.message}</Error>
                )}
            </FormRow>

            <FormRow>
                {/* type is an HTML attribute! */}
                <Button
                    variation="normal"
                    type="reset"
                    onClick={() => onCloseModal?.()}
                >
                    Cancel
                </Button>
                <Button>Register Machine</Button>
            </FormRow>
        </Form>
    );
}

export default CreateMachineForm;
