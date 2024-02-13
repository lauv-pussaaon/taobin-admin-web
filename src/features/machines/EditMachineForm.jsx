import {
    getTodayString,
    formatTimeString,
    TIME_PATTERN,
} from "../../utils/datetimeHelper";
import { useForm } from "react-hook-form";
import { useUpdateMachine } from "./hooks/useUpdateMachine";
import Button from "../../ui/components/Button";
import Heading from "../../ui/components/Heading";
import Input from "../../ui/components/Input";
import {
    Form,
    FormRow,
    InputWrapper,
    Label,
    Error,
} from "./CreateEditFormStyle";

function EditMachineForm({ machine, onCloseModal }) {
    const { updateMachine, isUpdating } = useUpdateMachine();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        defaultValues: {
            ...machine,
            openTime: formatTimeString(machine.openTime),
            closeTime: formatTimeString(machine.closeTime),
        },
    });

    function onSubmit(data) {
        updateMachine(data, {
            onSuccess: () => {
                reset();
                onCloseModal?.();
            },
        });
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Heading as="h2">Edit Machine Setting</Heading>
            <FormRow>
                <Label htmlFor="name">Machine Name</Label>
                <Input
                    type="text"
                    id="name"
                    maxLength={100}
                    disabled={isUpdating}
                    {...register("name", {
                        required: "This field is required.",
                    })}
                />
                {errors?.name?.message && <Error>{errors.name.message}</Error>}
            </FormRow>
            <FormRow>
                <Label htmlFor="status-active">Status</Label>
                <InputWrapper>
                    <Input
                        type="radio"
                        id="status-active"
                        value="active"
                        disabled={isUpdating}
                        {...register("status", {
                            required: "This field is required.",
                        })}
                    />
                    <span>active</span>
                    <Input
                        type="radio"
                        id="status-inactive"
                        value="inactive"
                        disabled={isUpdating}
                        {...register("status", {
                            required: "This field is required.",
                        })}
                    />
                    <span>inactive</span>
                </InputWrapper>
                {errors?.status?.message && (
                    <Error>{errors.status.message}</Error>
                )}
            </FormRow>
            <FormRow>
                <Label htmlFor="openTime">Operation Hours</Label>
                <InputWrapper>
                    <span>Open: </span>
                    <Input
                        type="text"
                        id="openTime"
                        disabled={isUpdating}
                        defaultValue="00:00"
                        {...register("openTime", {
                            required: "This field is required.",
                            pattern: {
                                value: TIME_PATTERN,
                                message:
                                    "Invalid time format. Please use hh:mm",
                            },
                        })}
                    />
                    <span>Close: </span>
                    <Input
                        type="text"
                        id="closeTime"
                        disabled={isUpdating}
                        defaultValue="00:00"
                        {...register("closeTime", {
                            required: "This field is required.",
                            pattern: {
                                value: TIME_PATTERN,
                                message:
                                    "Invalid time format. Please use hh:mm",
                            },
                        })}
                    />
                </InputWrapper>
                {(errors?.openTime?.message || errors?.closeTime?.message) && (
                    <Error>
                        {errors.openTime.message || errors.closeTime.message}
                    </Error>
                )}
            </FormRow>
            <FormRow>
                <Label htmlFor="installedDate">Installed Date</Label>
                <Input
                    type="date"
                    id="installedDate"
                    disabled={isUpdating}
                    defaultValue={getTodayString()}
                    {...register("installedDate")}
                ></Input>
                {errors?.installedDate?.message && (
                    <Error>{errors.installedDate.message}</Error>
                )}
            </FormRow>
            <FormRow>
                <Label htmlFor="address">Address</Label>
                <Input
                    type="text"
                    id="address"
                    maxLength={255}
                    disabled={isUpdating}
                    {...register("address", {
                        required: "This field is required",
                    })}
                ></Input>
                {errors?.address?.message && (
                    <Error>{errors.address.message}</Error>
                )}
            </FormRow>
            <FormRow>
                <Label htmlFor="city">City</Label>
                <Input
                    type="text"
                    id="city"
                    disabled={isUpdating}
                    defaultValue="Bangkok"
                    {...register("city", {
                        required: "This field is required",
                    })}
                />
                {errors?.city?.message && <Error>{errors.city.message}</Error>}
            </FormRow>
            <FormRow>
                <Label htmlFor="country">Country</Label>
                <Input
                    type="text"
                    id="country"
                    disabled={isUpdating}
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
                <Button
                    variation="normal"
                    type="reset"
                    onClick={() => onCloseModal?.()}
                >
                    Cancel
                </Button>
                <Button disabled={isUpdating}>Update Machine</Button>
            </FormRow>
        </Form>
    );
}

export default EditMachineForm;
