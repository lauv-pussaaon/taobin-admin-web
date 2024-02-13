import {
    formatTimeString,
    TIME_PATTERN,
    formatDateString,
} from "../../utils/datetimeHelper";
import { REQUIRED_FIELD_RULE } from "../../utils/constants";
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

function EditMachineForm({
    machine: {
        id,
        name,
        status,
        openTime,
        closeTime,
        installedDate,
        lastCheckupDate,
        nextCheckupDate,
        address,
        city,
        country,
    },
    onCloseModal,
}) {
    const { updateMachine, isUpdating } = useUpdateMachine();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        defaultValues: {
            id,
            name,
            status,
            installedDate: formatDateString(installedDate, "yyyy-MM-dd"),
            lastCheckupDate: formatDateString(lastCheckupDate, "yyyy-MM-dd"),
            nextCheckupDate: formatDateString(nextCheckupDate, "yyyy-MM-dd"),
            address,
            city,
            country,
            openTime: formatTimeString(openTime),
            closeTime: formatTimeString(closeTime),
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
                    {...register("name", REQUIRED_FIELD_RULE)}
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
                        {...register("status", REQUIRED_FIELD_RULE)}
                    />
                    <span>active</span>
                    <Input
                        type="radio"
                        id="status-inactive"
                        value="inactive"
                        disabled={isUpdating}
                        {...register("status", REQUIRED_FIELD_RULE)}
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
                            ...REQUIRED_FIELD_RULE,
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
                            ...REQUIRED_FIELD_RULE,
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
                    {...register("installedDate")}
                ></Input>
                {errors?.installedDate?.message && (
                    <Error>{errors.installedDate.message}</Error>
                )}
            </FormRow>
            <FormRow>
                <Label htmlFor="lastCheckupDate">Last Checkup Date</Label>
                <Input
                    type="date"
                    id="lastCheckupDate"
                    disabled={isUpdating}
                    {...register("lastCheckupDate")}
                ></Input>
                {errors?.lastCheckupDate?.message && (
                    <Error>{errors.lastCheckupDate.message}</Error>
                )}
            </FormRow>
            <FormRow>
                <Label htmlFor="nextCheckupDate">Next Checkup Date</Label>
                <Input
                    type="date"
                    id="nextCheckupDate"
                    disabled={isUpdating}
                    {...register("nextCheckupDate")}
                ></Input>
                {errors?.nextCheckupDate?.message && (
                    <Error>{errors.nextCheckupDate.message}</Error>
                )}
            </FormRow>
            <FormRow>
                <Label htmlFor="address">Address</Label>
                <Input
                    type="text"
                    id="address"
                    maxLength={255}
                    disabled={isUpdating}
                    {...register("address", REQUIRED_FIELD_RULE)}
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
                    {...register("city", REQUIRED_FIELD_RULE)}
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
                    {...register("country", REQUIRED_FIELD_RULE)}
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
